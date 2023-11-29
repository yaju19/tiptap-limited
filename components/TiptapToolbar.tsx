// components/Toolbar.js

import React from 'react';

interface IProps{
  applyFormat: (type: string)=>void;
  addImage: ()=>void;
  addTable: ()=>void;
  removeTable:()=>void;
  addIframe:()=>void;
}

export default function TipTapToolbar({ applyFormat, addImage, addTable, removeTable, addIframe }: IProps) {
  return (
    <div className="m-1 flex gap-x-2 border-b-2">
      <button className='px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => applyFormat('underline')}><i className="ri-bold"></i></button>
      <button className='px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => applyFormat('underline')}><i className="ri-underline"></i></button>
      <button className='px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => applyFormat('italic')}><i className="ri-italic"></i></button>
      <button className='px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-md' onClick={()=>addImage()}><i className="ri-image-line"></i></button>
      <button className='px-4 py-1 items-center justify-between bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => addTable()}>+<i className="ri-table-line"></i></button>
      <button className='px-4 py-1 items-center justify-between bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => removeTable()}>-<i className="ri-table-line"></i></button>
      <button className='px-4 py-1 items-center justify-between bg-gray-200 hover:bg-gray-300 rounded-md' onClick={() => addIframe()}>Ifr</button>
  
    </div>
  );
}
