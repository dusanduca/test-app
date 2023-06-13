import Layout from "@/layout/layout"
import { NextPageWithLayout } from "../_app"



const Contacts: NextPageWithLayout = () =>{
    return(
        <div className="contacts">
            <div className="contacts_left">
                <p>My Contacts</p>
            </div>
            <div className="contacts_right">

            </div>
        </div>
    )
}

Contacts.getLayout = function getLayout(page: any){
    return <Layout>{page}</Layout>
};

export default Contacts;