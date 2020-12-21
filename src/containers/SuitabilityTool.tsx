import { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MapContainer from '../components/Map';

const SuitabilityTool = () => {

    const getTab = (tab: number) => {
        switch(tab){
            case 1: 
                return (
                    <>
                        <p>Welcome to the Electric Car Suitability Tool.</p>
                        <p>Flexible electric car subscriptions are one thing...</p>
                        <p>...but first let's check if an electric car would suit your lifestyle!</p>
                        <p>Your results will give you a detailed evaluation of your suitability for driving an electric car. And</p>
                        <p>you'll be able to compare which models fit your range, budget and performance needs.</p>
                    </>
                )
            case 2:
                return  (
                    <>
                        <label>How do you park at home?</label>
                        <p>Select the option that best describes how you park at home:</p>
                        <fieldset className="radio-grid">
                            <span>
                                <input type="radio" name="parking" id="p1" value="Private"/>
                                <label htmlFor="#parking">Private off-street parking</label>
                            </span>
                            <span>
                                <input type="radio" name="parking" id="p2" value="Shared"/>
                                <label htmlFor="#p1">Shared parking</label>
                            </span>
                            <span>
                                <input type="radio" name="parking" id="p3" value="Street"/>
                                <label htmlFor="#p2">On Street parking</label>
                            </span>
                        </fieldset>
                    </>
                )
            case 3:
                return  (
                    <>
                        <label>Where do you live?</label>
                        <MapContainer/>
                    </>
                )

            case 4:
                return  (
                    <>
                        <label>What are your driving habits ?</label>
                        <div className="flex-column">
                            <button>Mostly just to work and back</button>
                            <button>Round trip to work but mostly with other destinations</button>
                            <button>I don't currently work/ I don't commute/ I do WFH</button>
                        </div>
                    </>
                )

            case 5:
                return  (
                    <>
                        <label>How old are you ?</label>
                        <div className="flex-column">
                            <button> less than 25</button>
                            <button>25-39</button>
                            <button>40-64</button>
                            <button>65+</button>
                        </div>
                    </>
                )

            case 6:
                return  (
                    <>
                        <label>How many miles in a year do you drive ?</label>
                        <div className="flex-column">
                            <button className="big-btn">I know my annual mileage</button>
                            <button className="big-btn">I don't know</button>
                        </div>
                    </>
                )
            
            case 7:
                return (
                    <>
                        <label> All Done!</label>
                    </>
                )
        }
    }

    const [selectedTab, setSelectedTab] = useState(1);

    const handleNext = () => {
        setSelectedTab(selectedTab+1);
    }

    const handlePrevious = () => {
        setSelectedTab(selectedTab-1);
    }

    useEffect(() => {
        console.log("selectedTab: ", selectedTab);
    }, [selectedTab]);
      
    return (
        <>
            <div className="suit-progress">
                <ProgressBar now={(100/6)*selectedTab} />
            </div>
            <div className="suit-content">
                {getTab(selectedTab)}
            </div>
            <div className="suit-controllers">
                {(selectedTab !== 1)? (
                    <button className="submit-btn left-btn" onClick={handlePrevious}> Back </button>
                ) : "" }

                {(selectedTab !== 7)? (
                    <button className="pink-btn submit-btn right-btn" onClick={handleNext}>
                        {(selectedTab === 0)? "Start Test" : "Next" }
                    </button>
                ) : "" }
                </div>
        </>
    )
}

export default SuitabilityTool;