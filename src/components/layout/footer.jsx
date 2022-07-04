const Footer = () => {

    const footerYear = new Date().getFullYear()
    return ( 
<footer className="footer bg-gray-700 p-10 text-primary-content footer-center">
   <p>Copyright &copy; {footerYear} all right reserved</p>

</footer>
      
     );
}
 
export default Footer;