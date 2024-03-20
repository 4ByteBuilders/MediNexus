import React from 'react'
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { FaPlus } from "react-icons/fa";

function TestUpload({testName}) {
    return (
        <div className='flex w-full p-2'>
            <span>{testName}</span>
            <Button className="bg-primary text-white">
                <FaPlus />
            </Button>
        </div>
    );
}

TestUpload.propTypes = {
    testName: PropTypes.string.isRequired
};

export default TestUpload;