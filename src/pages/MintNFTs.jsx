import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Header from "../components/resuableComponents/Header"
import Button from "../components/resuableComponents/Button"

const MintNFTs = () => {
  const [collectionName, setCollectionName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting collection name: ${collectionName}`);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <Layout>
      <div className='flex flex-col items-center w-full mb-20'>
        <Header>Create NFT</Header>

        <form onSubmit={handleSubmit} className='w-full lg:w-2/5 border border-blue-800 shadow-blue-800 shadow-md p-5 lg:p-10 rounded-3xl'>
          <div className='flex justify-center'>
            {selectedImage && (
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover shadow-blue-800 shadow-md' /> // Use selectedImage here
            )}
          </div>

          <label htmlFor="imageUpload" className='mt-4 block text-white font-semibold text-lg mb-2'>
            Upload Image
          </label>

          <div className='flex gap-2 items-center bg-slate-100 w-full h-12 rounded-full mb-5 lg:mb-10'>
            <label htmlFor="imageUpload" className="bg-blue-700 p-2 h-full rounded-full font-medium text-md flex items-center text-white cursor-pointer">
              Choose File
            </label>

            <span className=''>{selectedImage ? selectedImage.name : 'No file chosen'}</span>

            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className='bg-transparent flex-1 text-slate-800' 
              style={{ display: 'none' }}
            />
          </div>

          <label htmlFor="collectionName" className='text-white font-semibold text-lg'>
            Collection Name
          </label>
          <div className='flex justify-between bg-slate-100 w-full h-12 rounded-full p-3 mt-2 mb-4'>
            <input
              type="text"
              name="collectionName"
              id="collectionName"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder='e.g. CyberDuck'
              className='bg-transparent flex-1 focus:outline-none text-slate-800 placeholder:text-slate-800'
            />
          </div>
          <div className='flex justify-center'>
            <Button
              bg="bg-blue-800"
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
