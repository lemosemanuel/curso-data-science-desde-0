# Loop (for y while)

# 1) For
# El bucle for en Python es como una lista de tareas.
# El robot va recorriendo una lista y ejecuta una acción por cada elemento de la lista.

# Cómo funciona:

# "range(3)" crea una lista de números [0, 1, 2].
# El bucle va a recorrer cada número en esa lista.

for i in range(3):
    print("Hola", i)
# ¿Qué hace este código?
# i = 0: "Hola 0"
# i = 1: "Hola 1"
# i = 2: "Hola 2"

# Explicación Paso a Paso:
# range(3): Crea una lista de números [0, 1, 2].
# for i in range(3): El robot va a hacer la acción para cada número de la lista.
# print("Hola", i): Imprime "Hola" seguido del número.

# 2) While
# El bucle while en Python es como un robot que sigue repitiendo una acción mientras se cumple una condición.

# Cómo funciona:
# Condición: El robot sigue repitiendo la acción mientras la condición sea verdadera.
# Acción: Ejecuta la acción.
# Verificación: Después de cada repetición, el robot revisa si debe seguir.

i = 0
while i < 3:
    print("Hola", i)
    i += 1
# Output:
# "Hola 0"
# "Hola 1"
# "Hola 2"

# Explicación Paso a Paso:
# i = 0: El robot empieza desde el número 0.
# while i < 3: El robot sigue repitiendo la acción mientras i sea menor que 3.
# i += 1: Después de cada "Hola", el robot suma 1 a i.

# Podemos hacer For en los diccionarios (equivalente a objetos en JavaScript)
persona = {"nombre": "Juan", "edad": 30, "ciudad": "Madrid"}
for clave in persona:
    print(clave, ":", persona[clave])  # ira a persona['nombre'], luego a persona['edad'], luego a persona['ciudad']
# Output:
# "nombre: Juan"
# "edad: 30"
# "ciudad: Madrid"
