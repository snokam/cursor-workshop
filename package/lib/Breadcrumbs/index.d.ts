interface Props {
    crumbs?: {
        name: string;
        href: string;
        icon?: React.ReactNode;
    }[];
    basePath?: string;
}
export declare const Breadcrumbs: ({ crumbs, basePath }: Props) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumbs;
