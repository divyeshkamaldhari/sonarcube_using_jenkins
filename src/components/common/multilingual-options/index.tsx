import { Select } from 'antd';
import { multilingualOptionList } from '../../../constants/constants';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../../utils/local-storage';
import './style.scss';
const { Option } = Select;

export const MultilingualComponent = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const selectedLanguage = getLocalStorageItem('selected_language');
    i18n.changeLanguage(selectedLanguage || 'en');
  }, [i18n]);

  const handleSelectMultiLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setLocalStorageItem('selected_language', value);
  };

  return (
    <div className="language-btns" data-tour="step-2">
      <Select
        defaultValue={
          getLocalStorageItem('selected_language')
            ? multilingualOptionList.find(
                (v) => v.value === getLocalStorageItem('selected_language'),
              )?.lable
            : 'english'
        }
        onChange={handleSelectMultiLanguage}
      >
        {multilingualOptionList.map((v) => {
          return (
            <Option key={v.value} value={v.value}>
              {v.lable}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};
