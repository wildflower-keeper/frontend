export type FilterValueType = string;

export type FilterType = "NONE" | "NAME";

export interface FilterValuesType {
  filter: FilterType;
  filterValue: FilterValueType;
}
