import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Authurization,getAllCategorysapi,AddSubcatrgoryapi } from '../api/Api';
import Select from 'react-select';

const AddSubCategory = () => {
    const [name, setName] = useState('');
    const [arabicName, setarabicName] = useState('');
    const [frenchName, setfrenchName] = useState('');
    const [arabicDescription, setArabicDescription] = useState('');
    const [description, setDescription] = useState('');
    const [frenchDescription, setFrenchDescription] = useState('');
    const [mainCategoryId, setcategoryId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(getAllCategorysapi);

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const data = await response.json();
                const formattedOptions = data.data.mainCategories.map(category => ({
                    value: category.categoryId,
                    label: category.name,
                }));
                // console.log(data.data.categories.categoryId)
                setOptions(formattedOptions);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [mainCategoryId]);

    const handleCategoryChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
        if (selectedOption) {
            setcategoryId(selectedOption.value); // Update state with selected ID
        } else {
            setcategoryId(''); // Clear ID if no option selected
        }
    };

    const handleSubmit = async (event) => {  //2update new
        event.preventDefault();
        try {
            const response = await fetch(AddSubcatrgoryapi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Authurization}`, // Include token with Bearer prefix
                },
                body: JSON.stringify({
                    mainCategoryId,
                    name,
                    arabicName,
                    frenchName,
                    description,
                    arabicDescription,
                    frenchDescription,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                console.log(data);
                console.log(Authurization);
            }

            setarabicName('');
            setName('');
            setfrenchName('');
            setArabicDescription('');
            setDescription('');
            setFrenchDescription('');


            alert('SUBCategory Added successfully:)');


            console.log('SUBCategory Added successfully:)', data);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return ( 
        <>
        <div>
        <NavBar />
        <div className='text-white grid justify-center items-center py-20 w-[1800px] max-[1815px]:w-[800px] max-[1563px]:w-[600px] h-screen max-[628px]:w-[200px]'>

<div className='bg-[#1F2937] w-[1300px] max-[1815px]:translate-y-11 p-7 items-center grid translate-y-8 max-[1815px]:translate-x-[600px] max-[1626px]:translate-x-[550px] max-[1563px]:translate-x-[620px]  max-[2000px]:translate-x-24 max-[1736px]:w-[1200px]  rounded-xl border border-[#41434d] shadow-[#2c4157] max-[1536px]:w-[1000px] shadow-2xl max-[1430px]:translate-x-[500px] max-[1306px]:translate-x-[450px] max-[1278px]:w-[900px] max-[1200px]:w-[700px] max-[1056px]:translate-x-[300px] max-[964px]:translate-x-[150px] max-[854px]:translate-x-[100px] max-[764px]:translate-x-[70px] max-[724px]:w-[500px] max-[628px]:translate-x-[210px] max-[557px]:translate-x-[160px] max-[519px]:w-[400px] max-[408px]:w-[370px] max-[467px]:translate-x-[105px] max-[392px]:translate-x-[90px]'>
    <form className='grid justify-center  gap-6 grid-cols-1' onSubmit={handleSubmit}>
        <div>
            <h1 className='font-bold text-[25px]'>Add SUBCategory</h1>
        </div>
        <div>
        <Select
            placeholder={"Category Name"}
            name="mainCategoryId"
            id="mainCategoryId"
            className="" // Customize container
            isLoading={isLoading}
            value={mainCategoryId} // Reflect currently selected ID
            options={options}
            onChange={handleCategoryChange}
            // getOptionLabel={(option) => (option.label || option.value)}
            styles={{
                option: (provided, { isSelected }) => ({
                    ...provided,
                    color: 'black', // Set text color to black for all options
                    // Customize option background
                }),
            }}
        ></Select>
        <p className='font-bold m-2'>{mainCategoryId}</p>
        </div>
        <div className="flex justify-center items-center gap-3 max-[1815px]:grid">
            <input placeholder='Category Name: (AR)' className='bg-[#2b2e38] w-[350px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                name="arabicName"
                id="arabicName"
                value={arabicName}
                onChange={(e) => setarabicName(e.target.value)} required />
            <input placeholder='Category Name: (EN)' className='bg-[#2b2e38] w-[350px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} required />
            <input placeholder='Category Name: (FR)' className='bg-[#2b2e38] w-[350px] px-6 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d]' type="text"
                name="frenchName"
                id="frenchName"
                value={frenchName}
                onChange={(e) => setfrenchName(e.target.value)} required />
        </div>

        <div className="flex justify-center items-center gap-3 max-[1815px]:grid">
            <textarea placeholder='Description: (AR)' className=' bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                name="arabicDescription"
                id="arabicDescription"
                value={arabicDescription}
                onChange={(e) => setArabicDescription(e.target.value)} />
            <textarea placeholder='Description: (EN)' className=' bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <textarea placeholder='Description: (FR)' className=' bg-[#2b2e38] max-[1815px]:w-[800px] w-[1070px] px-8 py-2 rounded-xl border border-[#41434d] focus:outline outline-[#41434d] max-[1200px]:w-[500px] max-[724px]:w-[350px]'
                name="frenchDescription"
                id="frenchDescription"
                value={frenchDescription}
                onChange={(e) => setFrenchDescription(e.target.value)} />
        </div>

        <div>
            <input value="Add SUBCategoty" className="w-[150px] py-2 bg-[#8465F2] rounded text-white cursor-pointer" type="submit" />
        </div>
    </form>
</div>
</div>
        </div>
        </>
    );
}

export default AddSubCategory;