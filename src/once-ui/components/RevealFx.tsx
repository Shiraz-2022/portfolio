"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import { SpacingToken } from '../types';
import styles from './RevealFx.module.scss';

interface RevealFxProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	speed?: 'slow' | 'medium' | 'fast';
	delay?: number;
	translateY?: number | SpacingToken;
	trigger?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

const RevealFx = forwardRef<HTMLSpanElement, RevealFxProps>(({
	children,
	speed = 'medium',
	delay = 0,
	translateY,
	trigger,
	style,
	className,
	...rest
}, ref) => {
	const [isRevealed, setIsRevealed] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsRevealed(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (trigger !== undefined) {
			setIsRevealed(trigger);
		}
	}, [trigger]);

	const getSpeedDuration = () => {
		switch (speed) {
			case 'fast':
				return '1.5s';
			case 'medium':
				return '2s';
			case 'slow':
				return '3s';
			default:
				return '2s';
		}
	};

	const getTranslateYValue = () => {
		if (typeof translateY === 'number') {
			return `${translateY}rem`;
		} else if (typeof translateY === 'string') {
			return `var(--static-space-${translateY})`;
		}
		return undefined;
	};

	const translateValue = getTranslateYValue();

	const combinedClassName = `${styles.revealFx} ${isRevealed ? styles.revealed : styles.hidden} ${className || ''}`;

	const revealStyle: React.CSSProperties = {
		transitionDuration: getSpeedDuration(),
		transform: isRevealed ? 'translateY(0)' : `translateY(${translateValue})`,
		...style,
	};

	return (
		<span
			ref={ref}
			aria-hidden="true"
			style={revealStyle}
			className={combinedClassName}
			{...rest}>
			{children}
		</span>
	);
});

RevealFx.displayName = "RevealFx";
export { RevealFx };