package com.example.obana1.data;

/**
 * Element of table
 */
public class Column {
    private String name;
    private String dataType;

    public Column(String name, String dataType) {
        this.name = name;
        this.dataType = dataType;
    }

    public String getName() {
        return name;
    }

    public String getDataType() {
        return dataType;
    }
}
