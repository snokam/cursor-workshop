import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { US, NO } from 'country-flag-icons/react/3x2';
import Styled from './styled';
import { HeaderTheme } from '../SimpleHeader/types';

interface LanguagePickerProps {
  theme: HeaderTheme;
}

export const LanguagePicker = ({ theme }: LanguagePickerProps) => {
  const [open, setOpen] = useState(false);
  const { locale, locales, asPath, push } = useRouter();

  if (!locales) return null;

  const languageMap = {
    en: 'English',
    no: 'Norsk',
  } as const;

  const iconMap = {
    en: US,
    no: NO,
  } as const;

  const countries = locales.map((code) => ({
    value: code,
    label: languageMap[code as keyof typeof languageMap],
    Flag: iconMap[code as keyof typeof iconMap],
  }));

  const selected = countries.find((c) => c.value === locale);

  return (
    <Styled.Form $theme={theme} autoComplete="off">
      <FormControl size="small" variant="outlined">
        <InputLabel id="lang-label">Language</InputLabel>
        <Select
          open={open}
          id="country-select"
          label="Language"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={locale}
          onChange={(e: any) => {
            const newLocale = e.target.value as string;
            push(asPath, asPath, { locale: newLocale });
          }}
          renderValue={() => {
            if (!selected) return null;
            const { Flag } = selected;
            return (
              <Styled.Item>
                <Flag style={{ width: 22, height: 22 }} />
              </Styled.Item>
            );
          }}
        >
          {countries.map(({ value, label, Flag }) => (
            <MenuItem value={value} key={value}>
              <ListItemIcon>
                <Flag style={{ width: 22, height: 22 }} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Styled.Form>
  );
};
