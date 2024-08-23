import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import"./fontt.css"
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
        console.log("res2",dataResponse.data);
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4'>
           <div className='flex items-center gap-2 justify-between overflow-scroll scrollbar-none'>
            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-18 w-18 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link to={"/product-category?category="+product?.category} className='cursor-pointer' key={product?.category}>
                                <div className='w-18 h-18 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-10 flex items-center justify-center'>
                                    <img id="ff" src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-150 transition-all'/>
                                </div>
                                <p id="ff"className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
  )
}

export default CategoryList