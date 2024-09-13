/*
Copyright © 2024 Ellie Kerns ellie@epklabs.com
*/
package cli

import (
	env "api/internal/config"
	"os"

	"github.com/spf13/cobra"
)

var (
	cfgFile string
	rootCmd = &cobra.Command{
		Use:   "flex",
		Short: "Cli tool for configuring and managing FlexRoster",
		Long:  `Its kinda mid`,
	}
	Config *env.Env
)

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(initConfig)
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/config.yaml)")
	rootCmd.MarkFlagRequired("config")
}

func initConfig() {
	if cfgFile != "" {
		Config = env.GetEnv(cfgFile)
	} else {
		home, err := os.UserHomeDir()
		cobra.CheckErr(err)

		Config = env.GetEnv(home + "/config.yaml")
	}

}
