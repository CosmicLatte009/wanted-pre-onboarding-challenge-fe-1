declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.tsx" {
	import React from "react";
	const Component: React.FC<any>;
	export default Component;
}

declare module "*.ts" {
	const content: any;
	export default content;
}
