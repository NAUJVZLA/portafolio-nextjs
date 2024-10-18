import * as React from "react";
import { cn } from "@/lib/utils";

// Definición de la interfaz InputProps que extiende las propiedades nativas de un input HTML,
// y se le agrega una propiedad personalizada opcional llamada `customProp`.
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  customProp?: string; // Ejemplo de propiedad personalizada para extender las funcionalidades del componente
}

// El componente Input es un componente de tipo forwardRef que permite pasar una referencia externa al input.
// Se utiliza la interfaz InputProps para definir el tipo de las props.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, customProp, ...props }, ref) => {
    return (
      <input
        // Se establece el tipo de input, que se pasa como prop.
        type={type}
        // Se utiliza `customProp` como un atributo de datos (data-attribute) para que tenga un uso visible en el DOM.
        // Esto evita que ESLint lo considere como innecesario, ya que ahora forma parte de la estructura del componente.
        data-custom={customProp}
        // `className` se combina con las clases predeterminadas usando la función `cn` para estilos consistentes.
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        // Se pasa la referencia al input.
        ref={ref}
        // Se pasan el resto de las props recibidas para asegurar que todas las propiedades nativas y personalizadas
        // se apliquen correctamente al input.
        {...props}
      />
    );
  }
);

// Se establece un nombre para el componente para facilitar el debug en herramientas de desarrollo.
Input.displayName = "Input";

// Exportación del componente Input para que pueda ser utilizado en otros lugares de la aplicación.
export { Input };
