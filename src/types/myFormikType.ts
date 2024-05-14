export interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterValues {
  username: string;
  email: string;
  password: string;
  morality: boolean;
}

export type FormikErrors<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormikErrors<Values[K][number]>[] | string | string[]
      : string | string[]
    : Values[K] extends object
      ? FormikErrors<Values[K]>
      : string;
};

export type FormikTouched<Values> = {
  [K in keyof Values]?: Values[K] extends any[]
    ? Values[K][number] extends object
      ? FormikTouched<Values[K][number]>[]
      : boolean
    : Values[K] extends object
      ? FormikTouched<Values[K]>
      : boolean;
};

export interface AdvType {
  title: string;
  address: string;
  description: string;
  price: string;
  phone: string;
  imageUrl: string;
  // country: string;
  // state: string;
  // city: string;
}
