# Absolutely, here is a function that decodes a .txt file

def decode(message_file):
    
    # First access the .txt file
    file = open(message_file, "r")
    lines = file.readlines()

    # Then extract and seperate the words and numbers
    words = []
    numbers = []
    for line in lines:
        number, word = line.strip().split()
        numbers.append(int(number))
        words.append(word)
    data = list(zip(numbers, words))

    # Next build the pyramid
    numbers.sort()
    pyramid = []
    current_line = []
    line_count = 1

    for number in numbers:
        current_line.append(number)
        if len(current_line) == line_count:
            pyramid.append(current_line)
            current_line = []
            line_count = line_count + 1
    
    # Lastly get the message and return
    message = ""
    for line in pyramid:
        for index in line:
            if index == len(line) - 1:
                message = message + data[line[index]]
    return message.strip()


print(decode("message.txt"))

# 1. We declare the function passing in the .txt as a parameter
# 2. Then we access the .txt using the open() and readlines() method
# 3. Next we seperate and sort the numbers and corresponding words
# 4. Then we build the pyramid by creating a nested array while increasing the amount of values in each nested array by 1
# 5. Finally we extract the message based on the last number in each nested array and return the message.