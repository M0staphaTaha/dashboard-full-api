import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import { userr } from '../api/Api';


const NavBar = () => {
    
    const auth = useAuth();
    const handleLogout = () =>{
        auth.logout();
        navigate("/")
    }
    const [isOpenn, setIsOpenn] = useState(true);
    const toggleNavbarn = () => {
        setIsOpenn(!isOpenn)
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleNavbar2 = () => {
        setIsOpen2(!isOpen2)
    }
    const [isOpen3, setIsOpen3] = useState(false);
    const toggleNavbar3 = () => {
        setIsOpen3(!isOpen3)
    }
    const [isOpen4, setIsOpen4] = useState(false);
    const toggleNavbar4 = () => {
        setIsOpen4(!isOpen4)
    }
    const [isOpen5, setIsOpen5] = useState(false);
    const toggleNavbar5 = () => {
        setIsOpen5(!isOpen5)
    }
    const [isOpen6, setIsOpen6] = useState(false);
    const toggleNavbar6 = () => {
        setIsOpen6(!isOpen6)
    }
    const [isOpen7, setIsOpen7] = useState(false);
    const toggleNavbar7 = () => {
        setIsOpen7(!isOpen7)
    }
    const [isOpen8, setIsOpen8] = useState(false);
    const toggleNavbar8 = () => {
        setIsOpen8(!isOpen8)
    }
    const [isOpen9, setIsOpen9] = useState(false);
    const toggleNavbar9 = () => {
        setIsOpen9(!isOpen9)
    }
    return (
        <>
            <div className=''>
                <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button onClick={toggleNavbarn} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" ffillrule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                </button>
                                <Link to="/home" className="flex ms-2 md:me-24">
                                    <img src="/images/logoo 1.png" className="h-11 me-5" alt="Logo" />
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button onClick={toggleNavbar} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-10 h-10 rounded-full" src="/images/man-light-skin-tone-beard.svg" alt="user photo" />
                                        </button>
                                    </div>
                                    {
                                        isOpen && (
                                            <div className="z-50 absolute right-2 top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                                <div className="px-4 py-3" role="none">
                                                    {
                                                        userr !== null && (
                                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                    {userr.substring(0, userr.indexOf('@'))}
                                                    </p>

                                                        )
                                                            
                                                        
                                                    }
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                        {userr}
                                                    </p>
                                                </div>
                                                <ul className="py-1" role="none">
                                                    <li>
                                                        <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <aside id="logo-sidebar" className={` text-start fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${isOpenn ? '-translate-x-full' : 'translate-x-0'} bg-white border-r  lg:translate-x-0 dark:bg-gray-800 border-gray-700 `} aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto :bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <button onClick={toggleNavbar2} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Product</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen2 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addnewproduct" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add New Product</Link>
                                            </li>
                                            <li>
                                                <Link to="/activeproducts" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Active Products</Link>
                                            </li>
                                            <li>
                                                <Link to="/inactiveproducts" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">InActive Products</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar3} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Category</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen3 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addcategory" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Category</Link>
                                            </li>
                                            <li>
                                                <Link to="/updatecategory" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All Categorys</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar4} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="8" y="4" width="12" height="12" rx="2" />  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">SUBCategory</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen4 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addsubcategory" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add SUBCategory</Link>
                                            </li>
                                            <li>
                                                <Link to="/updatesubcategory" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All SUBCategorys</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar5} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <path d="M7 15v-4a2 2 0 0 1 4 0v4" />  <line x1="7" y1="13" x2="11" y2="13" />  <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Advertisement</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen5 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addadvertisement" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Advertisement</Link>
                                            </li>
                                            <li>
                                                <Link to="/getalladvertisements" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All Advertisement</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar6} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Blog Post</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen6 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addblogs" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Blogs</Link>
                                            </li>
                                            <li>
                                                <Link to="/getallblogs" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All Blogs</Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar7} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Coupons</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen7 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/addcoupon" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Coupon</Link>
                                            </li>
                                            <li>
                                                <Link to="/addcouponnall" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Coupon & Notify All Users </Link>
                                            </li>
                                            <li>
                                                <Link to="/addcouponns" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Add Coupon & Notify Selected Users</Link>
                                            </li>
                                            <li>
                                                <Link to="/allcoupons" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All Coupons</Link>
                                            </li>
                                            
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar8} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Notifications</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen8 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/notifyallcustomers" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">All Customers</Link>
                                            </li>
                                            <li>
                                                <Link to="/notifyselectedcustomers" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Selected Customers</Link>
                                            </li>                                            
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <button onClick={toggleNavbar9} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-100 dark:text-gray-400  dark:group-hover:text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-bold">Orders</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>{
                                    isOpen9 && (
                                        <ul id="dropdown-example" className=" py-2 space-y-2">
                                            <li>
                                                <Link to="/preparedorders" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Prepared Orders</Link>
                                            </li>
                                            <li>
                                                <Link to="/shippedorders" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Shipped Orders</Link>
                                            </li>                                            
                                            <li>
                                                <Link to="/deliverdorders" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700">Deliverd Orders</Link>
                                            </li>                                            
                                        </ul>
                                    )
                                }
                            </li>
                            <li>
                                <Link to="/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap font-bold">Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/report" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap font-bold">Report</span>
                                    {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap font-bold">Inbox</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium  rounded-full bg-[#8465F2] text-[#f8f8f8]">3</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap font-bold"> Purchase</span>
                                </Link>
                            </li> */}

                        </ul>
                    </div>
                </aside>


            </div>

        </>
    );
}

export default NavBar;