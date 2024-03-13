import { Input } from "@mui/base";
import { Controller, useForm } from "react-hook-form";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

const UpdateProduct = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            id: 0,
            name: "",
            imgUrl: "",
            qty: 0,
            price: 0,


        }
    })
    const onSubmit = (data) => console.log(data);
 

  return (<>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
  

        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller name="name" control={control} render={({field})=><Input{...field}/>}>
            </Controller>
            <input type="submit"/>

        </form>

    </>);
}

export default UpdateProduct;