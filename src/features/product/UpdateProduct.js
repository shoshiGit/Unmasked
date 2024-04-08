import { Input } from "@mui/base";
import { Controller, useForm } from "react-hook-form";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      imgUrl: "",
      description: "",
      qty: 0,
      price: 0,


    }
  })
  const onSubmit = (data) => console.log(data);

const navigate = useNavigate();
  return (<>
    <form id='form' className='text-center' style={{textAlign:"center",alignContent:"center",alignItems:"center",alignSelf:"center", width: '100%', maxWidth: '300px' }}>
      <h2>Update Product</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput label='Description' v-model='description' wrapperClass='mb-4' />

      <MDBInput label='ImgURL' v-model='imgURL' wrapperClass='mb-4' />
      <MDBInput type="number" label='Price' v-model='price' wrapperClass='mb-4' />


      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='confirm' />

      <MDBBtn color='primary' block className='my-4' onClick={()=>navigate("/list")}>
        Send
      </MDBBtn>
    </form>
  </>);
}

export default UpdateProduct;