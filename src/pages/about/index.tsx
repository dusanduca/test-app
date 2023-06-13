import Layout from "@/layout/layout"
import { NextPageWithLayout } from "../_app"

const About: NextPageWithLayout = () =>{
return(
        <div className="about">
             <div className="about_header">
                <h2>Hello people</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which dont look even slightly believable.  
                    </p>  
             </div>
             <div className="about_left">
                <h4>My resume</h4>
                <p>
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which dont look even slightly believable.
                </p>
             </div>
             <div className="about_right">
                
             </div>
        </div>
    )
}

About.getLayout = function getLayout(page: any){
    return <Layout>{page}</Layout>
};

export default About;

