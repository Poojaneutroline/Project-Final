import React, {useState} from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Calendar from '../CalendarModal/Calendar';
import { Button } from '@mui/material';

const AddOffersModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate]=useState();
    const openModal = () => {
      setModalOpen(true);
    };
    const onCloseModal = () => setModalOpen(false);
    const handleSelectedDate=(selectedDate)=>{
setDate(selectedDate);
setModalOpen(false);
    }
  
  return (
    <>
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
      <Calendar onSelectDate={handleSelectedDate}/>  
      </Modal>
    <div>
    <form
    //   onSubmit={handleSubmit}
      className=" flex md:w-[400px] md:h-[auto] mt-4  flex-col bg-[#ffffff] rounded-[10px] "
    > 
      <h1 className="text-center  text-[22px] font-[600] md:py-4">
        Add Offers
      </h1>
      <div className="flex items-center relative mx-3">
        {/* <img className="w-3.5  absolute left-4" src={user} alt="user"></img> */}
        <input
          className={`w-fullrounded-[5px]  text-[14px] h-[39px] m-2 pl-[20px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[20px]`}
          type="text"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          placeholder="Title"
          required
        />
        {/* {formErrors.name && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.name}*
          </p>
        )} */}
      </div>
      <div className="flex  items-center relative mx-3">
        {/* <img className="w-4 absolute left-4" src={mail} alt="mail"></img> */}
        <input
          className={`w-full  rounded-[5px]  text-[14px] h-[39px] m-2 pl-[26px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[20px]`}
          type="email"
          name="email"
        //   value={formData.email}
        //   onChange={handleChange}
          placeholder="Message"
          required
        />
        {/* {formErrors.email && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.email}*
          </p>
        )} */}
      </div>
      <div className="flex items-center relative mx-3">
        {/* <img
          className="w-4 h-4 absolute left-4"
          src={phone}
          alt="phone"
        ></img> */}
        <textarea
          className={`w-full rounded-[5px] md:p-2 text-[14px] h-[39px] m-2 pl-[26px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-auto md:placeholder:text-[15px] md:pl-[20px] resize-none`}
          rows={4}
          
          name="description"
          placeholder="Description"
        //   value={formData.contact}
        //   onChange={handlePhoneNumberChange}
          required
        />
        {/* {formErrors.contact && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.contact}*
          </p>
        )} */}
      </div>
      {/* SERVICE */}
      
      <div className="  mx-3 flex  flex-col md:justify-between md:items-center md:gap-5 md:flex-row  ">
        <div className=" relative w-[100px] md:w-auto ">
          {/* <img
            className=" hidden md:block md:w-4 left-2 absolute md:left-4 top-[1.40rem]"
            src={calender}
            alt="calender"
          ></img> */}
          <input
            // onClick={onOpenModal}
            type="text"
            placeholder='From'
            className=" md:pl-[20px] text-[14px]  h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[140px] md:h-[45px]  md:text-[15px] "
         />
            
            {/* {formData.date === "" ? (
              <p>Select Date</p>
            ) : (
              <p className="pl-3">{formData.date}</p>
            )} */}
        
          {/* {formErrors.date && (
            <p className="text-red-500 text-[12px] mx-3 ">
              {formErrors.date}*
            </p>
          )} */}
        </div>
        {/* <div className=" relative w-[100px] md:w-auto ">
         

          <button
            type="button"
            className="  text-[14px] h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[140px] md:h-[45px] md:text-[15px]   "
          >
            Select Time
          </button>
        </div> */}
        <div className=" relative w-[100px] md:w-auto ">
          {/* <img
            className=" hidden md:block  md:w-4 left-2 absolute md:left-4 top-[1.40rem]"
            src={time}
            alt="time"
          ></img> */}
          <button
            onClick={openModal}
            className=" md:pl-[20px] text-[14px]  h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[140px] md:h-[45px]  md:text-[15px] "
          >{date}</button>
             
            {/* {formData.date === "" ? (
              <p>Select Date</p>
            ) : (
              <p className="pl-3">{formData.date}</p>
            )} */}
          
          {/* {formErrors.time && (
            <p className="text-red-500 text-[12px] mx-3 ">
              {formErrors.time}*
            </p>
          )} */}
        </div>
      </div>
      {/* <div
        className={` text-center mt-2 ${
          (formData.time && formData.date) === "" ? "hidden" : null
        } `}
      >
        <p>
          Appointment is set to {formData.time}, {formData.date}
        </p>
      </div> */}
      <div className="flex justify-center items-center mt-5 mb-5">
        <button
          type="button"
        //   onClick={onOpenSucess}
          className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          Submit
        </button>
      </div>

      {/* <Modal
        classNames={{
          modal: "customModalSucess",
        }}
        open={openSucess}
        onClose={onCloseSucess}
        center
        closeIcon={closeIcon2}
      >
        <div className="h-[55px] flex flex-col justify-center items-center bg-[#A2DC77]">
          <p className=" text-[white] w-full text-center text-[17px] font-[600] tracking-wide font-inter">
            Sucess
          </p>
          <div className=" w-full relative">
            <img
              src={sucessGreen}
              className="w-[30px] h-[30px] absolute bottom-[-30px]  left-1/2 transform -translate-x-1/2"
              alt=""
            />
          </div>
        </div>

        <Detail data={formData} />
        <div className=" font-roboto mb-3 gap-[90px]  flex justify-evenly">
          <button
            type="button"
            onClick={onCloseSucess}
            className="border-none text-white bg-[#A2DC77] hover:bg-[#8ed35a] rounded-md"
            style={{
              padding: "8px 17px 10px 18px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            Edit
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border-none  text-[#4a4a4a] rounded-md bg-[#e9edf5] hover:bg-[#e2e9f7] "
            style={{
              padding: "8px 17px 10px 18px",

              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            Submit
          </button>
        </div>
      </Modal> */}
    </form>

    {/* <Modal
      classNames={{
        modal: "customModalCalender",
      }}
      open={open}
      onClose={onCloseModal}
      center
      closeIcon={closeIcon}
    >
      <Simple onSelectDate={handleSelectedDate} />
      {/* <Calendar onSelectDate={handleSelectedDate} /> */}
    {/* </Modal> */}
  </div>
</>
  )
}

export default AddOffersModal
