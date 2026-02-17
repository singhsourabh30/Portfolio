'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CommandLine {
  command: string;
  output?: string;
  isExecuting?: boolean;
}

export default function TerminalSection() {
  const [commands, setCommands] = useState<CommandLine[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const commandsList: CommandLine[] = [
    {
      command: 'PS C:\\CloudOps> Get-AzureADUser -All $true',
      output: '--- Retrieving Azure AD Users (10,000+) ---\n✓ User count: 10,547\n✓ Active users: 9,823\n✓ Guest users: 724',
    },
    {
      command: 'PS C:\\CloudOps> New-ConditionalAccessPolicy -ZeroTrust Enabled',
      output: '--- Configuring Conditional Access Policy ---\n✓ Policy: ZeroTrust_MainPolicy\n✓ Conditions: Device Compliance, Location, Risk Level\n✓ Grant: Require MFA',
    },
    {
      command: 'PS C:\\CloudOps> Set-MsolUser -UserPrincipalName user@org.com -StrongAuthenticationRequired $true',
      output: '--- Enforcing MFA ---\n✓ User: user@org.com\n✓ MFA Status: Enforced\n✓ Authentication Methods: Authenticator App, SMS',
    },
    {
      command: 'PS C:\\CloudOps> Invoke-ComplianceScan -Intune',
      output: '--- Running Intune Device Compliance Scan ---\n✓ Total Devices: 2,341\n✓ Compliant: 2,198 (93.9%)\n✓ Non-Compliant: 143 (6.1%)\n✓ Remediation: In Progress',
    },
  ];

  useEffect(() => {
    if (currentCommandIndex >= commandsList.length) {
      return;
    }

    const timer = setTimeout(() => {
      const newCommand = { ...commandsList[currentCommandIndex], isExecuting: true };
      setCommands((prev) => [...prev, newCommand]);

      // Simulate command execution
      const executionTimer = setTimeout(() => {
        setCommands((prev) =>
          prev.map((cmd, idx) =>
            idx === prev.length - 1 ? { ...cmd, isExecuting: false } : cmd
          )
        );
        setCurrentCommandIndex((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(executionTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentCommandIndex, commandsList]);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          LIVE COMMAND CENTER
        </motion.h2>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-lg overflow-hidden border border-neon-blue/30 shadow-2xl"
        >
          {/* Terminal header */}
          <div className="bg-dark-secondary border-b border-neon-blue/20 px-6 py-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-auto text-sm text-neon-blue font-mono">PowerShell Command Executor</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm min-h-96 space-y-4">
            {commands.length === 0 && (
              <div className="text-neon-cyan">
                <div>System Ready...</div>
                <div className="mt-2 text-neon-blue">Initializing command sequence...</div>
              </div>
            )}

            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {/* Command */}
                <div className="text-neon-blue">
                  <span className="text-neon-green">PS</span> {cmd.command}
                  {cmd.isExecuting && <span className="animate-pulse ml-2">█</span>}
                </div>

                {/* Output */}
                {cmd.output && (
                  <div className="text-neon-cyan whitespace-pre-wrap ml-4 text-xs">
                    {cmd.output}
                  </div>
                )}
              </motion.div>
            ))}

            {currentCommandIndex < commandsList.length && (
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <span className="text-neon-blue">PS</span>
                <span className="animate-pulse ml-2">█</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Terminal status bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-sm font-mono text-neon-cyan"
        >
          Commands Executed: {commands.length} / {commandsList.length}
        </motion.div>
      </div>
    </section>
  );
}
