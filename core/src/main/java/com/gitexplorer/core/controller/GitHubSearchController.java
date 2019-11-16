package com.gitexplorer.core.controller;

import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.eclipse.egit.github.core.Repository;
import org.eclipse.egit.github.core.client.GitHubClient;
import org.eclipse.egit.github.core.client.GitHubRequest;
import org.eclipse.egit.github.core.client.GitHubResponse;
import org.eclipse.egit.github.core.service.RepositoryService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;

@RestController
public class GitHubSearchController {

    @RequestMapping("/search/repository")
    public String searchKeywords(@RequestParam(value = "kw", defaultValue = "") String keyword) throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpget = new HttpGet("https://api.github.com/search/repositories?q=" + keyword);
        httpget.setHeader(HttpHeaders.ACCEPT, "application/vnd.github.mercy-preview+json");
        CloseableHttpResponse response = httpclient.execute(httpget);

        return EntityUtils.toString(response.getEntity(), "UTF-8");
    }

    @RequestMapping("/search/description")
    public String searchKeywordsInDescription(@RequestParam(value = "kw", defaultValue = "") String keyword) throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpget = new HttpGet("https://api.github.com/search/repositories?q=" + keyword + "+in:description");
        httpget.setHeader(HttpHeaders.ACCEPT, "application/vnd.github.mercy-preview+json");
        CloseableHttpResponse response = httpclient.execute(httpget);

        return EntityUtils.toString(response.getEntity(), "UTF-8");
    }

    @RequestMapping("/search/readme")
    public String searchKeywordsInReadme(@RequestParam(value = "kw", defaultValue = "") String keyword) throws IOException {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpget = new HttpGet("https://api.github.com/search/repositories?q=" + keyword + "+in:readme");
        httpget.setHeader(HttpHeaders.ACCEPT, "application/vnd.github.mercy-preview+json");
        CloseableHttpResponse response = httpclient.execute(httpget);

        return EntityUtils.toString(response.getEntity(), "UTF-8");
    }
}
