import TableRow_Heading from '../../Molecules/table/TableRow_Heading';

let TableHeading_Data = [
   {
      text: 'S.no',
      style: 'max-[348px]:text-[3.5vw] w-[5vw] max-[553px]:w-[5.5vw] text-center text-center align-middle bg-[#090909] border-[#322F2F] text-white max-[553px]:w-[2vw] max-[553px]:h-[7vh] max-[553px]:text-[2.5vw]  max-[775px]:text-[1.8vw] md:text-md rounded-tl-2xl',
   },
   {
      text: 'Name',
      style: 'max-[348px]:text-[3vw]  w-[18vw]  bg-[#090909] text-white text-center h-[5vh] text-sm p-[0.9vw] max-[348px]:hidden max-[553px]:text-[2.5vw] max-[775px]:text-[1.8vw] md:text-md',
   },
   {
      text: 'Email',
      style: 'max-[348px]:text-[3vw]  w-[20vw] bg-[#090909] text-white text-center h-[5vh] text-sm p-[0.9vw] md:text-md max-[553px]:text-[2.5vw] max-[775px]:text-[1.8vw]',
   },
   {
      text: 'Mobile Number',
      style: 'max-[348px]:text-[3vw]  w-[15vw] bg-[#090909] text-white text-center h-[5vh] text-sm p-[0.9vw] md:text-md max-[553px]:text-[2.5vw] max-[775px]:hidden',
   },
   {
      text: 'Actions',
      style: 'max-[348px]:text-[3vw]  w-[7vw] bg-[#090909] text-white text-center h-[5vh] text-sm p-[0.9vw] max-[553px]:text-[2.5vw] max-[775px]:text-[1.8vw] md:text-md rounded-tr-2xl',
   },
];

const AdminContactTable_Title = () => {
   return <TableRow_Heading TableHeadingArray={TableHeading_Data} />;
};

export default AdminContactTable_Title;
