'use client';

import React from 'react';
import { Progress } from 'antd';
import style from './ProgressBar.module.css';
import { calculateProgressPercent } from '@/app/hooks/useProgressCalculate';

export const ProgressBar = () => {
  const percentResult = calculateProgressPercent();
  return (
    <div className={style.progressBar}>
      <Progress
        trailColor="#ffffffa2"
        percent={percentResult}
        showInfo={true}
        strokeColor={{
          from: '#fb1735',
          to: '#12bd02',
        }}
        strokeLinecap="round"
      />
    </div>
  );
};
