import React, { useEffect, useState } from 'react';
import { Authurization,GetAllBlogsapi,GetAllBlogsDataapi,DeleteBlogsBtnapi,DeleteBlogsImgBtnapi,UpdateBlogsapi,PutBlogsImgBtnapi, getTagsUrl } from '../api/Api';
import NavBar from '../components/NavBar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const GetAllBlogs = () => {
    const [englishContent, setContent] = useState('');
    const [arabicContent, setarabicContent] = useState('');
    const [frenchContent, setfrenceContent] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [englishTitle, setTitle] = useState('');
    const [arabicTitle, setarabicTitle] = useState('');
    const [frenchTitle, setfrenchTitle] = useState('');
    const [productData, setProductData] = useState(null);
    const [productData2, setProductData2] = useState(null);
    const [idcategory, setIdcategory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [englishTags, setTags] = useState([]);
    const [arabicTags, setArabicTags] = useState([]);
    const [frenchTags, setFrenchTags] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [tagValue, setTagValue] = useState('');
    const [tagValueA, setTagValueA] = useState('');
    const [tagValueF, setTagValueF] = useState('');

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch(getTagsUrl);
                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };

        fetchTags();
    }, [getTagsUrl]);



    const handleTagInputChange = (event) => {
        setTagValue(event.target.value);
    };
    const handleTagInputChangeA = (event) => {
        setTagValueA(event.target.value);
    };
    const handleTagInputChangeF = (event) => {
        setTagValueF(event.target.value);
    };

    const addTag = (tag) => {
        if (tag.key === 'Enter' && tagValue.trim()) {
            setTags([...englishTags, tagValue.trim()]);
            setTagValue('');
        }
    };
    const addTagA = (tag) => {
        if (tag.key === 'Enter' && tagValueA.trim()) {
            setArabicTags([...arabicTags, tagValueA.trim()]);
            setTagValueA('');
        }
    };
    const addTagF = (tag) => {
        if (tag.key === 'Enter' && tagValueF.trim()) {
            setFrenchTags([...frenchTags, tagValueF.trim()]);
            setTagValueF('');
        }
    };

    const handleTagSelection = (suggestion) => {
        setTags([...englishTags, suggestion]);
        setTagValue('');
    };
    const handleTagSelectionA = (suggestion) => {
        setArabicTags([...arabicTags, suggestion]);
        setTagValueA('');
    };
    const handleTagSelectionF = (suggestion) => {
        setFrenchTags([...frenchTags, suggestion]);
        setTagValueF('');
    };

    const handleTagRemoval = (tag) => {
        setTags(englishTags.filter((t) => t != tag));
    };
    const handleTagRemovalA = (tag) => {
        setArabicTags(arabicTags.filter((t) => t != tag));
    };
    const handleTagRemovalF = (tag) => {
        setFrenchTags(frenchTags.filter((t) => t != tag));
    };

    const toggleNavbar = (index) => {
        setIsOpen(isOpen === index ? null : index)
    }


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Set loading state to true

            try {
                const response = await fetch(GetAllBlogsapi, {
                });
                const data = await response.json();
                console.log(data);
                setProductData(data);

            } catch (error) {
                console.error('Error fetching data:', error);

            } finally {
                setIsLoading(false); // Set loading state to false
            }
        };

        fetchData();
    }, []);


    const fetchData2 = async (categoryId) => {
        setIsLoading2(true); // Set loading state to true

        try {
            const response2 = await fetch(GetAllBlogsDataapi+categoryId, {
                headers: {
                    Authorization: `Bearer ${Authurization}`,
                }
            });
            const data2 = await response2.json();
            console.log(data2);
            setProductData2(data2); // Update product data
            setarabicTitle(data2.data.post.arabicTitle)
            setTitle(data2.data.post.title)
            setfrenchTitle(data2.data.post.frenchTitle)
            setContent(data2.data.post.content)
            setarabicContent(data2.data.post.arabicContent)
            setfrenceContent(data2.data.post.frenchContent)

        } catch (error) {
            console.error('Error fetching data:', error);

        } finally {
            setIsLoading2(false); // Set loading state to false
        }
    };


    const handleProductStatusChange = async (categoryId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'delete' : 'active';
        const apiEndpoint = DeleteBlogsBtnapi+categoryId;

        try {
            const response = await fetch(apiEndpoint, {
                method: 'DELETE', // Use POST for status updates
                headers: {
                    Authorization: `Bearer ${Authurization}`,
                    Accept: 'application/json',
                    'Accept-Language': 'en'
                }
            });

            if (!response.ok) {
                console.error('Error delete product status:', response);
                alert('You cant Delete this advertisement')
                // Handle errors gracefully 
            }

            else {
                // Update product data locally (assuming success)
                setProductData(prevState => ({
                    ...prevState,
                    data: {
                        posts: prevState.data.posts.map(product =>
                            product.categoryId === categoryId ? { ...product, statush: newStatus } : product
                        )
                    }
                }));
            }
            if (response.ok) {

                alert('Blog Post Deleted successful')
            }
        } catch (error) {
            console.error('Error delete product status:', error);
            // Handle errors gracefully
        }
    };


    const handleSubmit = async (event) => {  //2update new
        event.preventDefault();
        try {
            const response = await fetch(UpdateBlogsapi+idcategory, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${Authurization}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    englishTitle,
                    englishContent,
                    arabicTitle,
                    arabicContent,
                    frenchTitle,
                    frenchContent,
                    frenchTags,
                    arabicTags, 
                    englishTags
                }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data);
                console.log(Authurization);

                setarabicTitle("")
                setTitle("")
                setfrenchTitle("")
                setContent("")
                setarabicContent("")
                setfrenceContent("")


                alert('Advertisement Updated successfully:)');


                console.log('Advertisement Updated successfully:)', data);

            }
            console.log(data);
            console.log(Authurization);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    // console.log(idcategory);


    const handleDeleteImage = async (productId) => {
        const response = await fetch(DeleteBlogsImgBtnapi+productId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Authurization}`, // Include token with Bearer prefix
            },
        });
        // setButtonText(buttonText === 'Delete' ? 'Done' :"Done");
        if (response.ok) {
            // Image deletion successful
            alert('Image deleted successfully!');
            console.log('Image deleted successfully!');
        } else {
            console.error('Error deleting image:', await response.text());
            // Handle deletion error (e.g., display an error message)
        }
    };


    const handleImageChange = (event) => {
        setSelectedImages(event.target.files[0]); // Access the first selected file
    };
    const handleImageUpload = async () => {
        if (!selectedImages) {
            return alert('Please select an image to upload.');
        }
        const formData = new FormData();
        formData.append('image', selectedImages);
        try {
            const response = await fetch(PutBlogsImgBtnapi+idcategory+`/upload`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${Authurization}`, // Include token with Bearer prefix
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Image uploaded successfully!');
                alert('Image uploaded successfully!');

                // Update product data to reflect the change (consider refetching data)
                // ... (implementation details)
            } else {
                console.error('Error uploading image:', await response.text());
                alert('Advertisement picture is not empty');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading image: 1 max');
            // Handle errors (e.g., network issues)
        }
    };
    return ( 
        <>
        <div>
        <NavBar/>
        <div className='text-white grid justify-center items-center w-[1800px] max-[1815px]:w-[800px] max-[1563px]:w-[600px] h-screen max-[628px]:w-[200px]'>
                    <div>
                        {isLoading ? (
                            <p>Loading details...</p>
                        ) : productData ? (
                            // Display fetched product details 
                            <div className='grid gap-6'>
                                {productData.data.posts.map((product, index) => (
                                    <div className=' justify-center text-left max-[1700px]:text-center bg-[#1F2937] w-[1400px] max-[1815px]:translate-y-20 px-7 py-2 items-center grid grid-cols-2 translate-y-28 max-[1815px]:translate-x-[600px] max-[1626px]:translate-x-[550px] max-[1563px]:translate-x-[620px]  max-[2000px]:translate-x-24 max-[1736px]:w-[1200px]  rounded-xl border border-[#41434d] shadow-[#2c4157] max-[1536px]:w-[1000px] shadow-2xl max-[1430px]:translate-x-[500px] max-[1306px]:translate-x-[470px] max-[1266px]:w-[850px] max-[1130px]:translate-x-[400px] max-[1200px]:w-[700px] max-[1056px]:translate-x-[340px] max-[964px]:translate-x-[150px] max-[854px]:translate-x-[100px] max-[764px]:translate-x-[70px] max-[724px]:w-[500px] max-[628px]:translate-x-[210px] max-[557px]:translate-x-[160px] max-[519px]:w-[400px] max-[408px]:w-[370px] max-[467px]:translate-x-[105px] max-[392px]:translate-x-[90px]'
                                        key={index}>
                                        <div>
                                            <div className='flex items-center gap-3'>
                                                <span className='font-bold text-[20px]'>Title: </span>
                                                <h1 className=' text-gray-300'> {product.title}</h1>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <span className='font-bold text-[20px]'>ID: </span>
                                                <h3 className='text-gray-300'>{product.blogPostId}</h3>
                                            </div>
                                        </div>
                                        <div className='grid justify-end  gap-3'>
                                            <div className='flex justify-center'>
                                                <button className='px-3 py-1 rounded-md bg-red-600 text-white' onClick={() => {
                                                    handleProductStatusChange(product.blogPostId, product.statush);
                                                }}>{product.status === 'active' ? 'Done' : 'Delete'}</button>
                                            </div>

                                            <div className='flex justify-center'>
                                                <button onClick={() => { toggleNavbar(index); fetchData2(product.blogPostId); setIdcategory(product.blogPostId) }} className='px-3 py-1 rounded-md bg-blue-800 text-white '>Update Category</button>
                                            </div>
                                        </div>
                                        {

                                            isOpen === index && (

                                                <div key={product.categoryId} className=' grid justify-center items-center text-center translate-x-[330px] m-3 max-[1536px]:translate-x-[250px] max-[1266px]:translate-x-[210px] max-[724px]:translate-x-[120px] max-[519px]:translate-x-[90px] max-[408px]:translate-x-[80px]'>
                                                    <form className='grid justify-center text-center gap-6 grid-cols-1' onSubmit={handleSubmit}>

                                                        <div className='grid text-center justify-center items-center'>
                                                            <h1 className='font-bold text-[25px] whitespace-nowrap text-center'>Update Blog Post</h1>
                                                        </div>

                                                        <div className='grid justify-center items-center gap-3'>
                                <div className="input-container">
                                    <input
                                        className='bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                                        type="text"
                                        value={tagValue}
                                        placeholder='English HashTags#'
                                        onChange={handleTagInputChange}
                                        onKeyDown={addTag}
                                    />
                                <ul className="tags-list flex gap-2 m-2">
                                    {englishTags.map((tag) => (
                                        <li key={tag} className="tag  px-2 pb-1.5 bg-slate-600 rounded-lg cursor-pointer">
                                            {tag}
                                            &nbsp;&nbsp;
                                            <button className=' text-gray-400 text-[22px]' type="button" onClick={() => handleTagRemoval(tag)}>
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                    {suggestions.data != null && (
                                        <ul className="suggestions-list flex gap-2 m-2 bg-slate-700 rounded-lg p-2">
                                            {suggestions.data.filter((product) => {
                                                return tagValue.toLocaleLowerCase() === '' ? "" : product.toLocaleLowerCase().includes(tagValue)
                                            }).map((suggestion) => (
                                                <li
                                                    key={suggestion}
                                                    className="suggestion p-2 bg-slate-600 rounded-lg cursor-pointer flex-wrap" 
                                                    onClick={() => handleTagSelection(suggestion)}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        <div className='grid justify-center items-center gap-3'>
                                <div className="input-container">
                                    <input
                                        className='bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                                        type="text"
                                        value={tagValueA}
                                        placeholder='Arabic HashTags#'
                                        onChange={handleTagInputChangeA}
                                        onKeyDown={addTagA}
                                    />
                                <ul className="tags-list flex gap-2 m-2">
                                    {arabicTags.map((tag) => (
                                        <li key={tag} className="tag  px-2 pb-1.5 bg-slate-600 rounded-lg cursor-pointer">
                                            {tag}
                                            &nbsp;&nbsp;
                                            <button className=' text-gray-400 text-[22px]' type="button" onClick={() => handleTagRemovalA(tag)}>
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                    {suggestions.data != null && (
                                        <ul className="suggestions-list flex gap-2 m-2 bg-slate-700 rounded-lg p-2">
                                            {suggestions.data.filter((product) => {
                                                return tagValueA.toLocaleLowerCase() === '' ? "" : product.toLocaleLowerCase().includes(tagValueA)
                                            }).map((suggestion) => (
                                                <li
                                                    key={suggestion}
                                                    className="suggestion p-2 bg-slate-600 rounded-lg cursor-pointer flex-wrap" 
                                                    onClick={() => handleTagSelectionA(suggestion)}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className='grid justify-center items-center gap-3'>
                                <div className="input-container">
                                    <input
                                        className='bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                                        type="text"
                                        value={tagValueF}
                                        placeholder='French HashTags#'
                                        onChange={handleTagInputChangeF}
                                        onKeyDown={addTagF}
                                    />
                                <ul className="tags-list flex gap-2 m-2">
                                    {frenchTags.map((tag) => (
                                        <li key={tag} className="tag  px-2 pb-1.5 bg-slate-600 rounded-lg cursor-pointer">
                                            {tag}
                                            &nbsp;&nbsp;
                                            <button className=' text-gray-400 text-[22px]' type="button" onClick={() => handleTagRemovalF(tag)}>
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                    {suggestions.data != null && (
                                        <ul className="suggestions-list flex gap-2 m-2 bg-slate-700 rounded-lg p-2">
                                            {suggestions.data.filter((product) => {
                                                return tagValueF.toLocaleLowerCase() === '' ? "" : product.toLocaleLowerCase().includes(tagValueF)
                                            }).map((suggestion) => (
                                                <li
                                                    key={suggestion}
                                                    className="suggestion p-2 bg-slate-600 rounded-lg cursor-pointer flex-wrap" 
                                                    onClick={() => handleTagSelectionF(suggestion)}
                                                >
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>


                                                        <div className="grid justify-center items-center gap-3 max-[1815px]:grid">
                                                            <input placeholder='Arabic Title' className='bg-[#2b2e38] w-[1070px] max-[1736px]:w-[1000px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                                name="arabicTitle"
                                                                id="arabicTitle"
                                                                value={arabicTitle}
                                                                onChange={(e) => setarabicTitle(e.target.value)} required />

                                                            <input placeholder='English Title' className='bg-[#2b2e38] w-[1070px] max-[1736px]:w-[1000px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                                name="englishTitle"
                                                                id="englishTitle"
                                                                value={englishTitle}
                                                                onChange={(e) => setTitle(e.target.value)} required />

                                                            <input placeholder='French Title' className='bg-[#2b2e38] w-[1070px] max-[1736px]:w-[1000px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                                name="frenchTitle"
                                                                id="frenchTitle"
                                                                value={frenchTitle}
                                                                onChange={(e) => setfrenchTitle(e.target.value)} required />
                                                        </div>

                                                        <div className="grid justify-center items-center gap-3 max-[1815px]:grid">
                                                        <ReactQuill placeholder='Arabic Content' className='text-black bg-[#ffffff] w-[1070px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                            name="arabicContent"
                                                            id="arabicContent"
                                                            value={arabicContent}
                                                            onChange={setarabicContent} required />

                                                        <ReactQuill placeholder='English Content' className='text-black bg-[#ffffff] w-[1070px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                            name="englishContent"
                                                            id="englishContent"
                                                            value={englishContent}
                                                            onChange={setContent} required />

                                                        <ReactQuill placeholder='French Content' className='text-black bg-[#ffffff] w-[1070px] max-[1536px]:w-[900px] max-[1278px]:w-[700px] max-[1200px]:w-[500px] max-[724px]:w-[300px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                                                            name="frenchContent"
                                                            id="frenchContent"
                                                            value={frenchContent}
                                                            onChange={setfrenceContent} required />
                                                        </div>  

                                                        <div>
                                                            <input value="Update Blog" className="w-[200px] py-2 bg-[#8465F2] rounded text-white cursor-pointer" type="submit" />
                                                        </div>
                                                    </form>

                                                        <div className='m-5'>

                                                        {isLoading2 ? <p>Loading product details...</p> :

                                                            <div className='grid 2xl:grid 2xl:justify-center justify-center  items-center gap-4'>
                                                                {
                                                                    productData2.data.post.pictureUrl === "" ? (
                                                                        <div className='grid justify-center items-center gap-3 '>
                                                                            <label className="block mb-2 text-sm font-medium text-white translate-y-1" htmlFor="imageUpload">Select Image:</label>
                                                                            <input type="file"
                                                                                onChange={handleImageChange}
                                                                                id="imageUpload"// Restrict file types to images
                                                                                className=" bg-slate-700 text-black text-sm file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-[#8465F2] file:hover:bg-[#5735d1] file:text-white rounded" required accept="image/*" />
                                                                            <button className=' cursor-pointer bg-green-600 rounded-md px-2 py-1' onClick={handleImageUpload} disabled={!selectedImages}>Upload Image</button>
                                                                        </div>

                                                                    ) : (
                                                                        <div className=''>
                                                                            <img src={productData2.data.post.pictureUrl} alt={`picture`} className="product-image rounded-lg w-[270px]" />
                                                                            <button className='bg-red-500 rounded-md mt-4 px-2 py-1 mb-10' onClick={() => { handleDeleteImage(productData2.data.post.blogPostId) }} >Delete</button>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        }
                                                        </div>
                                                </div>
                                            )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No product data found.</p>
                        )}
                    </div>
                </div>
        </div>
        </>
    );
}

export default GetAllBlogs;