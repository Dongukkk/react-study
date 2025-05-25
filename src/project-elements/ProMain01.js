import './ProMain01.css';

import WorkOut from './WorkOut';
import { useState } from 'react';

function ProMain01() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="btn_showWork" onClick={() => setShowModal(true)}>
                운동 보여주기
            </button>
            {showModal && (
                <WorkOut closeModal={() => setShowModal(false)} />
            )}
        </>
    );
}

export default ProMain01;