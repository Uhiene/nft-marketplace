import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Header from '../components/resuableComponents/Header';
import Button from '../components/resuableComponents/Button';

const MintNFTs = () => {
  const [collectionName, setCollectionName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image file

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting collection name: ${collectionName}`);
    // Handle form submission, including file upload if applicable
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Update state with the selected file
  };

  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Header>Create NFT</Header>

        <form onSubmit={handleSubmit} className='w-1/2'>
          <label htmlFor="imageUpload" className='mt-4 block text-white font-semibold text-lg mb-2'>
            Upload Image
          </label>

          <div className='flex justify-between items-center bg-transparent border border-slate-100 w-full p-2.5 rounded-lg mb-10'>

            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className='bg-transparent flex-1 text-white'
            // style={{ display: 'none' }}
            />

            {selectedImage && (
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='w-16 h-10 rounded-lg object-cover' />
            )}
          </div>

          <label htmlFor="collectionName" className='text-white font-semibold text-lg'>
            Collection Name
          </label>
          <div className='flex justify-between bg-transparent border border-slate-100 w-full p-2.5 rounded-lg mt-2 mb-4'>
            <input
              type="text"
              name="collectionName"
              id="collectionName"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder='e.g. CyberDuck'
              className='bg-transparent flex-1 focus:outline-none text-white'
            />
          </div>
          <div className='flex justify-center'>
            <Button
              bg="bg-blue-500"
              textColor="text-white"
              btnText="Mint NFT"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default MintNFTs;
