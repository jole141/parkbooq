import React from "react";
import * as S from "./Dropdown.styled";
import {
  FlatList,
  Keyboard,
  PixelRatio,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";

export type DropdownItem = {
  label: string;
  value: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

const getPlaceholderText = (
  items: DropdownItem[],
  placeholder?: string,
  selectedItem?: string
) => {
  if (selectedItem) {
    return items.find((item) => item.value === selectedItem)?.label;
  }

  return placeholder ?? "Select an item";
};

export const Dropdown = ({
  items,
  selectedValue,
  onValueChange,
  placeholder,
  label,
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleItemPress = (value: string) => {
    onValueChange(value);
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    Keyboard.dismiss();
  };

  return (
    <>
      {isDropdownOpen && (
        <TouchableWithoutFeedback
          onPress={closeDropdown}
          onPressIn={closeDropdown}
        >
          <S.DropdownBackground />
        </TouchableWithoutFeedback>
      )}
      <S.DropdownContainer>
        {label && <S.DropdownLabel>{label}</S.DropdownLabel>}
        <S.DropdownButton onPress={toggleDropdown}>
          <S.DropdownButtonText>
            {getPlaceholderText(items, placeholder, selectedValue)}
          </S.DropdownButtonText>
          <S.DropdownIcon
            name={isDropdownOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          />
        </S.DropdownButton>

        {isDropdownOpen && (
          <S.DropdownOptionsContainer>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              style={{ maxHeight: PixelRatio.getPixelSizeForLayoutSize(150) }}
              renderItem={({ item }) => (
                <S.DropdownOption
                  onPress={() => {
                    handleItemPress(item.value);
                  }}
                >
                  <S.DropdownOptionText>{item.label}</S.DropdownOptionText>
                </S.DropdownOption>
              )}
            />
          </S.DropdownOptionsContainer>
        )}
      </S.DropdownContainer>
    </>
  );
};
