import { NextPageWithLayout } from "@/pages/_app"
import styles from "./styles.module.css"
import Layout from "@/layout/layout"

const Home: NextPageWithLayout = () =>{
    return(
        <div className={styles["home"]}>
            <div className={styles["home_left"]}>
                <h2>Naslov 1</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="home_right">
                <h2>Naslov 2</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using
                    Content here, content here, making it look like readable English.
                </p>
            </div>
            <div className="list">
                <ul>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Phone num</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Dusan</td>
                        <td>Mitic</td>
                        <td>Nis,Srbija</td>
                        <td>066/018</td>
                        <td>email@nis.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page: any){
    return <Layout>{page}</Layout>
};

export default Home;