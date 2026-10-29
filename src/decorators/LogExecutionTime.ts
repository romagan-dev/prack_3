
export function LogExecutionTime() {
    return function ( 
        target: object,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: unknown[]) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const end = performance.now();
            console.log(`[BENCHMARK] Метод ${propertyKey} виконано за ${(end - start).toFixed(2)} ms.`);
            return result;
     
        };
       return descriptor;

    };
    

}



/* Розробка декоратора методу @LogExecutionTime():
◦ Написати фабрику декоратора методу @LogExecutionTime(), яка:
▪ Перехоплює виклик цільового методу через PropertyDescriptor;
▪ Фіксує час старту через performance.now();
▪ Викликає оригінальний метод;
▪ Розраховує витрачений час і виводить у консоль інформаційне повідомлення:
[BENCHMARK] Метод <MethodName> виконано за <Time> ms.;
▪ Повертає результат виконання. */