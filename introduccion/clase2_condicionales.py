# Condicionales en Python

# if-else básico
edad = 20
# Esto es muy fácil: si se cumple la 'lógica', es decir, si la condición resulta True,
# entonces se ejecutará el código dentro del bloque 'if'. Si no se cumple, se pasará al 'else'.
if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")

# if-elif-else
temperatura = 30

if temperatura > 30:
    print("Hace mucho calor.")
elif temperatura > 20:
    print("El clima es agradable.")
else:
    print("Hace frío.")

# Operador ternario (Python no tiene un operador ternario como tal, pero se puede hacer algo similar)
es_mayor_de_edad = "Sí, es mayor de edad." if edad >= 18 else "No, es menor de edad."
print(es_mayor_de_edad)

# Python no tieneswitch-case como javaScript

