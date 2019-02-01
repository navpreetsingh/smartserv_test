require 'byebug'
require 'yaml'
class Conversion
    def initialize(number)
        @number = number.to_s
        @index_dict = YAML.load(File.read("index_dict.yml"))
    end

    def result
        fetch(@number) 
    end

    private 
        def fetch(number)
            initials = number[0..3]
            output = []
            hash = @index_dict[initials]
            output = hash[number]
            output.length > 0 ? output.first : nil
        end
end

numbers = ["0 228626", "0 4855", "0 78737626", "0 8467", ]
input_numbers = ARGV
numbers = input_numbers unless input_numbers.empty?

numbers.map{|v| v.split(" ").last}.each do |number|
    conversion = Conversion.new(number)
    result = conversion.result
    puts "\nNumber: #{number} \nFinal Result: #{result}"
end


