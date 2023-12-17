import logo from '../../assets/Logo_Med+.png'

export default function HomeFooter() {
  return (
    <>
      <footer className='bg- text-white' style={{'background': '#08107D'}}>
        <section className="flex justify-between flex-wrap p-5">
          <div className='m-2'>
            <img src={logo} alt="" />
            <p>Where healing matters</p>
          </div>
          <div className='m-2'>
            <h4 className='font-semibold'>CUSTOMER SERVICE</h4>
            <p>Contact us</p>
          </div>
          <div className='m-2'>
            <h4 className='font-semibold'>INFORMATION</h4>
            <p>About</p>
            <p>Administrator</p>
          </div>
          <div className='m-2'>
            <h4 className='font-semibold'>FOLLOW US</h4>
          </div>
          <div className='m-2'>
            <h4 className='font-semibold'>CONTACT US </h4>
            <p>(+91) 95851 76147</p>
            <p>info@kenvill.com</p>
            <p>8.00 - 21.00</p>
          </div>
        </section>
      </footer>
    </>
  );
}
