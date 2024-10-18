import * as React from "react";
import { cn } from "@/lib/utils";

// Definición de la interfaz TextareaProps que extiende las propiedades nativas de un textarea HTML,
// y se le agrega una propiedad personalizada opcional llamada `customProp`.
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  customProp?: string; // Ejemplo de propiedad personalizada para extender las funcionalidades del componente
}

// El componente Textarea es un componente de tipo forwardRef que permite pasar una referencia externa al textarea.
// Se utiliza la interfaz TextareaProps para definir el tipo de las props.
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, customProp, ...props }, ref) => {
    return (
      <textarea
        // `customProp` se utiliza como un data-attribute para que tenga un uso visible en el DOM,
        // asegurando que ESLint no lo considere innecesario.
        data-custom={customProp}
        // `className` se combina con las clases predeterminadas usando la función `cn` para aplicar estilos.
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        // Se pasa la referencia al textarea.
        ref={ref}
        // Se pasan las demás props recibidas para que todas las propiedades nativas y personalizadas
        // se apliquen correctamente al textarea.
        {...props}
      />
    );
  }
);

// Se establece un nombre para el componente para facilitar el debug en herramientas de desarrollo.
Textarea.displayName = "Textarea";

// Exportación del componente Textarea para que pueda ser utilizado en otros lugares de la aplicación.
export { Textarea };
