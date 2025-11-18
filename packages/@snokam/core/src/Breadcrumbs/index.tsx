import { Typography } from "@mui/material";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import styles from "./styled";

interface Props {
  crumbs?: { name: string; href: string; icon?: React.ReactNode }[];
  basePath?: string;
}

export const Breadcrumbs = ({ crumbs = [], basePath = "" }: Props) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
      sx={styles.Breadcrumbs}
    >
      {crumbs.map(({ href, name, icon }) => (
        <MuiLink
          key={href}
          href={`${basePath}${href}`}
          component={Link}
          sx={styles.Link}
        >
          {icon && icon}
          {name}
        </MuiLink>
      ))}
      <Typography fontSize="inherit"></Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
