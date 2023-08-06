import React,{useState} from 'react'
import radio from "../../assets/radio1.png";
import right from "../../assets/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OfferModal from "./OfferModal";
import edit from "../../assets/edit2.png";
import trash from "../../assets/trash2.png";
import info from "../../assets/info.svg";


const Offers = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
      };
      const onCloseModal = () => setModalOpen(false);
    
  return (

        
        <div className=" flex flex-wrap gap-8">
        <Modal
        open={modalOpen}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customButton",
        }}
      >
        <OfferModal />
      </Modal>
         
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Offers</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] gap-4 items-center ">
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15 - 16
              </p>
              <img src={info} alt="right" className="w-[15px] h-[18px]"onClick={openModal} />
            </div>
            <div className="flex px-4 items-center  justify-between">
              
              <p className="text-[13.2px] text-[#6A5F5F]">Limited</p>
             
              <div className="flex px-4 items-center justify-end gap-3 pr-5">
              <p className="text-[13.2px] text-[#6A5F5F] ">20 views</p>
              <div className='flex gap-1'>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
              </div>
             
            
            </div>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Offers</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] gap-4 items-center ">
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15 - 16
              </p>
              <img src={info} alt="right" className="w-[15px] h-[18px]"onClick={openModal} />
            </div>
            <div className="flex px-4 items-center  justify-between">
              
              <p className="text-[13.2px] text-[#6A5F5F]">Limited</p>
             
              <div className="flex px-4 items-center justify-end gap-3 pr-5">
              <p className="text-[13.2px] text-[#6A5F5F] ">20 views</p>
              <div className='flex gap-1'>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
              </div>
             
            
            </div>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Offers</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] gap-4 items-center ">
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15 - 16
              </p>
              <img src={info} alt="right" className="w-[15px] h-[18px]"onClick={openModal} />
            </div>
            <div className="flex px-4 items-center  justify-between">
              
              <p className="text-[13.2px] text-[#6A5F5F]">Limited</p>
             
              <div className="flex px-4 items-center justify-end gap-3 pr-5">
              <p className="text-[13.2px] text-[#6A5F5F] ">20 views</p>
              <div className='flex gap-1'>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
              </div>
             
            
            </div>
            </div>
          </div>
          <div className="w-[450px] h-[145px] rounded-[7px] bg-white">
            <div className="w-[450px] h-[50px] bg-[#8FCEDD] rounded-t-[7px] flex items-center justify-center">
              <h2 className="text-white text-[17px] font-[600]">Offers</h2>
            </div>
            <div className=" flex w-full  px-4 py-[17px] gap-4 items-center ">
              <img src={radio} alt="radio" className="w-[12x] h-[12px] " />
              <p className="text-[16px]">20% off for 30 min consultant</p>
              <p className="text-[14px] text-[#4A55A2] ml-[50px] font-[500]">
                Jun 15 - 16
              </p>
              <img src={info} alt="right" className="w-[15px] h-[18px]"onClick={openModal} />
            </div>
            <div className="flex px-4 items-center  justify-between">
              
              <p className="text-[13.2px] text-[#6A5F5F]">Limited</p>
             
              <div className="flex px-4 items-center justify-end gap-3 pr-5">
              <p className="text-[13.2px] text-[#6A5F5F] ">20 views</p>
              <div className='flex gap-1'>
              <img src={edit} alt="edit" className='w-[15px] h-[15px]'/>
             <img src={trash} alt='trash' className='w-[14px] h-[16px]'/>
              </div>
             
            
            </div>
            </div>
          </div>
        </div>
  
  )
}

export default Offers
