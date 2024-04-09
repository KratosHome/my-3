"use client"
import "./ContainerModel.scss";
import Swim from "@/components/UI/Swim/Swim";
import React, {Suspense, useEffect, useState} from 'react';

const ComputersCanvas = React.lazy(() => import("@/components/home/ComputersCanvas/ComputersCanvas"));

const ContainerModel = () => {
    const [showModel, setShowModel] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModel(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="main">
            <Swim className="computer">
                <div className="test"></div>
                {showModel && (
                    <Suspense fallback={<></>}>
                        <ComputersCanvas />
                    </Suspense>
                )}
            </Swim>
        </section>
    );
};

export default ContainerModel;