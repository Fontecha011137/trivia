const jsonTrivia = {
    results: [
      {
        type: "multiple",
        difficulty: "easy",
        category: "Java",
        question: "¿Que es una clase?",
        correct_answer: "Unidad de programa que aloja un conjunto de metodos",
        incorrect_answers: ["Conjunto de metodos", "Instancia de metodos", "Grupo de estudiantes"]
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "Java",
        question: "¿Como se imprime una linea de texto?",
        correct_answer: "system.out.print",
        incorrect_answers: ["public class imprimir()", "publis static void main(String[] args)","Scanner entrada = newScanner(System.in);"]
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Java",
        question: "Confundir el operador de igualdad (==) con el de asignación (=) puede producir un error lógico o de compilación.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Java",
        question: "Todas las variables deben recibir un tipo cuando se declaran",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "medium",
        category: "Java",
        question: "Java considera que las variables numero y NuMeRo son idénticas",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
  
      {
        type: "boolean",
        difficulty: "easy",
        category: "C++",
        question: "Los comentarios hacen que la computadora imprima el texto que va después de los caracteres // en la pantalla, al ejecutarse el programa.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "C++",
        question: "Las declaraciones pueden aparecer casi en cualquier parte del cuerpo de una función de C++.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "C++",
        question: "Todas las variables deben declararse antes de utilizarlas.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "C++",
        question: "Un programa en C++ que imprime tres líneas de salida debe contener tres instrucciones en las que se utilicen cout y el operador de inserción de f lujo.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "C++",
        question: "El operador módulo (%) se puede utilizar sólo con operandos enteros.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
  
  
      {
        type: "boolean",
        difficulty: "easy",
        category: "PHP",
        question: "PHP es un programa del lado del clientre",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "multiple",
        difficulty: "easy",
        category: "PHP",
        question: "¿que es php?",
        correct_answer: "PHP  es un lenguaje interpretado de alto nivel embebido en páginas HTML y ejecutado en el servidor.",
        incorrect_answers: ["es el lenguaje con el que se define el contenido de las páginas web.","es un lenguaje de programación que se utiliza para definir la presentación visual de un documento HTML","lenguaje de programación de alto nivel, interpretable, basado en prototipos, y dinámico"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "PHP",
        question: "Php es un lenguuaje de hypertexto",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "PHP",
        question: "Php es un lenguaje de estilos",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "easy",
        category: "PHP",
        question: "PHP esta enfocado a las bases de datos",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
  
      {
        type: "boolean",
        difficulty: "hard",
        category: "JavaScript",
        question: "Es el lenguaje mas usado",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "JavaScript",
        question: "Existe diferencia entre == y === en js",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "JavaScript",
        question: "Las funciones flecha (=>) en JavaScript tienen su propio this.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "JavaScript",
        question: "const impide que se cambie el valor de una variable.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "JavaScript",
        question: "El tipo de null ¿es null?",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
  
  
      {
        type: "boolean",
        difficulty: "hard",
        category: "Python",
        question: "En Python, las listas son estructuras mutables.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Python",
        question: "El operador == compara la identidad de los objetos (si son el mismo objeto en memoria).",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Python",
        question: "Una función en Python puede retornar más de un valor.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Python",
        question: "En Python, los diccionarios permiten claves duplicadas.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Python",
        question: "El valor None en Python es equivalente a False en una evaluación booleana",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
  
      {
        type: "boolean",
        difficulty: "hard",
        category: "Mysql",
        question: "En MySQL, la cláusula WHERE se utiliza para ordenar los resultados de una consulta.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Mysql",
        question: "Las claves primarias (PRIMARY KEY) no pueden tener valores duplicados ni nulos",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Mysql",
        question: "La instrucción DELETE elimina una tabla completa de la base de datos.",
        correct_answer: "Falso",
        incorrect_answers: ["Verdadero"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Mysql",
        question: "En MySQL, el tipo de dato VARCHAR(100) puede almacenar hasta 100 caracteres",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Mysql",
        question: "Puedes usar funciones como SUM() o AVG() en una consulta SQL para obtener valores agregados.",
        correct_answer: "Verdadero",
        incorrect_answers: ["Falso"]
      },
  
  
    ]
  };
  