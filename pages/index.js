import Contact from '../components/contact'
import Layout from '../components/Layout'
import Services from '../components/services'
import HomePage from '../homepage/index'


 const Home = ()=> {
  return (
    <>
   <Layout>
   <HomePage />
   <Services />
   <Contact />
   </Layout>
    </>
  )
}
export default Home