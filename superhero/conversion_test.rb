require "minitest/autorun"
require "./conversion"

describe Conversion do
    before do
        @number = ["0 228626", "0 4855", "0 78737626", "0 8467"]
        @result = ["BATMAN", "HULK", "SUPERMAN", "THOR"]
    end

    describe "when passed a valid number" do
        it "should convert the number to superhero name" do
            @number.map{|v| v.split(" ").last}.each_with_index do |num, index|
                @conversion = Conversion.new num
                @conversion.result.must_equal @result[index]
            end
        end
    end
end