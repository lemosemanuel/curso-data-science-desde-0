# Funciones en Python

# La Caja Mágica (Función)
# Vamos a decir que una función es como una caja especial que puede hacer cosas increíbles. 
# La caja tiene una entrada y una salida.
# Entonces, la dividimos en 3 partes:
# - Entrada (Parámetros): Puede tener o no.
# - Procesamiento (Cuerpo de la Función)
# - Salida (Valor Retornado): se devuelve con "return"

# Práctica

# 1) Definición de una función Básica
# Con parámetro
def saludar(nombre):
    return f"Hola, {nombre}!"

# Sin parámetro
def saludar_sin_parametro():
    return "Hola!"

# Llamada a las funciones
print(saludar("Juan")) # Output: Hola, Juan!
print(saludar_sin_parametro()) # Output: Hola!

# Función con parámetros por defecto
# (si no le paso ningún parámetro, a tomará el valor de 0 y b tomará el valor de 0)
def sumar(a=0, b=0):
    return a + b

print(sumar(5, 5)) # Output: 10
# Llamada a la función con un solo argumento (solo le doy valor a "a")
print(sumar(5)) # Output: 5

# 2) Función anónima (función asignada a una variable)
multiplicar = lambda x, y: x * y

# Llamada a la función
print(multiplicar(4, 5)) # Output: 20


# Función más compleja: calcula los ingredientes necesarios para un pastel basándose en la cantidad de harina
def calcular_ingredientes(harina):
    # Relación básica: Por cada 100 gramos de harina necesitamos
    agua = harina * 0.5     # 0.5 litros de agua por cada 100 gramos de harina
    leche = harina * 0.3    # 0.3 litros de leche por cada 100 gramos de harina
    huevos = (harina // 200) + (1 if harina % 200 != 0 else 0) # 1 huevo por cada 200 gramos de harina, redondeado hacia arriba
    manteca = harina * 0.2  # 0.2 litros de manteca por cada 100 gramos de harina
    levadura = harina * 0.05 # 0.05 gramos de levadura por cada 100 gramos de harina

    # Crear un diccionario con las cantidades de los ingredientes
    return {
        "agua": agua,
        "leche": leche,
        "huevos": huevos,
        "manteca": manteca,
        "levadura": levadura
    }

# Ejemplo de uso
harina = 500  # 500 gramos de harina
ingredientes = calcular_ingredientes(harina)
print(ingredientes) # Output: {'agua': 2.5, 'leche': 1.5, 'huevos': 3, 'manteca': 1.0, 'levadura': 0.25}
