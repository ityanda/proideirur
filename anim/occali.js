// TODO: add special casing to add conditional value based on orient signal

function processSignal(value, orient) {
    let result = value;

    // Add conditional value based on orient signal
    if (orient === 'up') {
        result += 10;
    } else if (orient === 'down') {
        result -= 10;
    }
    
    return result;
}
