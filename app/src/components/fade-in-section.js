import React from "react";

/**
 * https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
 * Gathered code for the fade in section here.eat tutorial as it explains what
 * needs to be done step by step :)
 */

const FadeInSection = ({ children }) => {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);
	return (
		<div
			className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
			ref={domRef}
		>
			{children}
		</div>
	);
};

export default FadeInSection;
