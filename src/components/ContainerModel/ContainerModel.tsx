"use client"
import "./ContainerModel.scss";
import Swim from "@/components/UIA/Swim/Swim";
import React from 'react';
import ComputersCanvas from "@/components/home/ComputersCanvas/ComputersCanvas";

const ContainerModel = () => {

    return (
        <section className="main">
            <Swim className="computer">
                <div className="test"></div>
                <ComputersCanvas/>
            </Swim>
        </section>
    );
};

export default ContainerModel;