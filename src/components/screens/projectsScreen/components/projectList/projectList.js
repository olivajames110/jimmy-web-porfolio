import React, { Component } from 'react';
import Project from '../project/project';

const ProjectList = props => {
	const websitesArray = [
		{
			projectName: 'GrillMarx Steakhouse & Raw Bar',
			description: 'Website homepage website for GrillMarx Steakhouse & Raw Bars in Maryland',
			icon: 'faUtensils',
			image: 'https://digitalmarketing.blob.core.windows.net/5587/images/items/image608625.jpg',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/form',
			component: '<GrillMarx />'
		},
		{
			projectName: 'Ordereze',
			description: 'Homepage website for the restaurant marketing company Orderezes',
			icon: 'faScroll',
			image: 'https://digitalmarketing.blob.core.windows.net/5215/images/items/image606691.jpg',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/website',
			component: '<Website />'
		},
		{
			projectName: 'Benvenuto',
			description: 'Homepage website for the restaurant Benvenuto in NYC',
			icon: 'faScroll',
			image: 'https://digitalmarketing.blob.core.windows.net/5587/images/items/image608624.jpg',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/form',
			component: '<Benvenuto />'
		}
	];

	const projectsArray = [
		{
			projectName: 'Baseball Cards',
			description: 'A baseball generator that allows you to buid custom baseball cards',
			icon: 'faScroll',
			image: 'https://digitalmarketing.blob.core.windows.net/5215/images/items/image606690.jpg',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/form',
			component: '<Form />'
		},
		{
			projectName: 'Ordereze Website',
			description: 'Homepage website for the restaurant marketing company Orderezes',
			icon: 'faScroll',
			image: 'https://digitalmarketing.blob.core.windows.net/5215/images/items/image606691.jpg',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/website',
			component: '<Website />'
		},
		{
			projectName: 'Price Comparison',
			description: 'Chart comparing the cost and savings of different online ordering platforms',
			icon: 'faScroll',
			image: 'https://digitalmarketing.blob.core.windows.net/5215/images/items/image606692.png',
			sourceUrl:
				'https://github.com/olivajames110/jimmy-web-porfolio/tree/master/src/components/screens/projectsScreen/projects/priceCalc',
			component: '<PriceCalc />'
		}
	];

	return (
		<div className="nav-project-holder">
			{props.type === 'website'
				? websitesArray.map(project => {
						return (
							<Project
								image={project.image}
								projectName={project.projectName}
								icon={project.icon}
								sourceUrl={project.sourceUrl}
								description={project.description}
								handleCheckActive={props.handleCheckActive}
								handleProjectChange={props.handleProjectChange}
								component={project.component}
								state={props.currentProject}
							/>
						);
					})
				: projectsArray.map(project => {
						return (
							<Project
								image={project.image}
								projectName={project.projectName}
								icon={project.icon}
								sourceUrl={project.sourceUrl}
								description={project.description}
								handleCheckActive={props.handleCheckActive}
								handleProjectChange={props.handleProjectChange}
								component={project.component}
								state={props.currentProject}
							/>
						);
					})}
		</div>
	);
};

export default ProjectList;
