package com.gitexplorer.core.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Developer {
    private String username;
    private String name;
    private String type;
    private String url;
    private String avatar;
    private DeveloperRepository repo;
}
