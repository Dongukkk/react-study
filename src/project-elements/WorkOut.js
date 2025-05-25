import React, { useState } from 'react';
import './WorkOut.css';
import squat from './squat.jpg';

export default function WorkOut({ closeModal }) {
    const [currentTab, setCurrentTab] = useState(0);
    //사용할 탭 ( 운동방법, 난이도 )
    // const tabNameArr = ['instruction', 'level'];

    let info_tab = document.getElementById('workout-modal-information-tab');
    let level_tab = document.getElementById('workout-modal-level-tab');

    return (
        <div className="workout-modal-fullscreen">
            <div className="workout-modal-box">
                <div className="workout-modal-header">
                    <h1 className="exercise-title">스쿼트</h1>
                    <button className="close-button" onClick={closeModal}>✕</button>
                </div>

                <div className="workout-modal-body">
                    <div className="image-area">
                        <img src={squat}/>
                    </div>

                    <div className="info-area">
                        <div className="tabs">
                            <button
                                className='tab active'
                                id='workout-modal-information-tab'
                                onClick={() => {
                                    info_tab = document.getElementById('workout-modal-information-tab');
                                    level_tab = document.getElementById('workout-modal-level-tab');
                                    if(currentTab==1)
                                        level_tab.classList.remove('active');
                                    info_tab.classList.add('active');
                                    setCurrentTab(0);
                                }}
                            >
                                운동 설명
                            </button>
                            <button
                                className='tab'
                                id='workout-modal-level-tab'

                                onClick={() => {
                                    info_tab = document.getElementById('workout-modal-information-tab');
                                    level_tab = document.getElementById('workout-modal-level-tab');
                                    if(currentTab==0)
                                        info_tab.classList.remove('active');
                                    level_tab.classList.add('active');
                                    setCurrentTab(1);
                                }}
                            >
                                필요기구 및 난이도
                            </button>
                        </div>

                        <div className="tab-content">
                            {
                                currentTab == 0 && 
                                (<p>스쿼트는 하체 근육 강화에 좋은 대표적인 복합 운동입니다.</p>)
                            }
                            {
                                currentTab == 1 && 
                                (<p>기구: 바벨 또는 맨몸<br/>난이도: 초중급 (자세 숙련도에 따라)</p>)
                            }
                        </div>

                        <div className="routine">
                            <h3>추천 루틴</h3>
                            <ul>
                                <li>3세트 × 12회</li>
                                <li>세트 간 휴식 60초</li>
                                <li>주 3회 반복</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
