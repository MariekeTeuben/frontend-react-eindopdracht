import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import './ParkDetails.css';
import Card from "../../components/Card/Card";


function ParkDetails() {
    const [details, setDetails] = useState({});
    const { parkCode } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=500&api_key=gF5KCU6HVDRDuaDyTQuyKS6YOzzaNBkgJl1IlOZg`);
                console.log(result.data.data);
                setDetails(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [parkCode]);


    return(
        <>
            <header className="header-parkDetails">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                    </div>
                </section>
            </header>
            <main>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        {details.length > 0 && (
                                <div>
                                    <h1>{details[0].fullName}</h1>
                                    <h3>{details[0].description}</h3>

                                    <div className="photo-container">
                                        <Card
                                            image={details[0].images[0].url}
                                            title={details[0].images[0].title}
                                        />
                                        <Card
                                            image={details[0].images[1].url}
                                            title={details[0].images[1].title}
                                        />
                                        <Card
                                            image={details[0].images[2].url}
                                            title={details[0].images[2].title}
                                        />
                                    </div>

                                    <h4>Things to do</h4>
                                    <p>There's much to do in {details[0].name}. Have a look at the different experiences you can have:</p>
                                    <p>
                                        {details[0].activities.length > 0 && details[0].activities.map((activity) => {
                                            return <span className="tag-overview">
                                                <span className="tags">
                                                    {activity.name}
                                                </span>
                                            </span>
                                        })
                                        }
                                    </p>

                                    <h4>Topics</h4>
                                    <p>The National Parks are beautifully diverse. Discover what {details[0].name} has to offer you:</p>
                                    <p>
                                        {details[0].topics.length > 0 && details[0].topics.map((topic) => {
                                            return <span className="tag-overview">
                                                <span className="tags">
                                                {topic.name}
                                                </span>
                                            </span>
                                        })
                                        }
                                    </p>

                                    <h4>Contact Info</h4>
                                    <h5>Address:</h5>
                                    <p>{details[0].addresses[0].line1}</p>
                                    <p>{details[0].addresses[0].line2}</p>
                                    <p>{details[0].addresses[0].city}</p>

                                    <h5>Mailing Address:</h5>
                                    <p>{details[0].contacts.emailAddresses[0].emailAddress}</p>

                                    <h5>Phone:</h5>
                                    <p>{details[0].contacts.phoneNumbers[0].phoneNumber}</p>


                                </div>


                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default ParkDetails;
